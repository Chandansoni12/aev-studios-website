export interface EnquiryPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface SubmissionResult {
  ok: boolean;
  fallbackUrl?: string;
}

/**
 * Encapsulates enquiry submission and mailto fallback handling for AEV Studios.
 */
export class ContactService {
  private static instance: ContactService | null = null;
  private readonly recipientEmail = 'aevstudio.mail9@gmail.com';
  private readonly formSubmitEndpoint = 'https://formsubmit.co/ajax/aevstudio.mail9@gmail.com';
  private readonly timeoutMs = 6000;

  private constructor() {}

  public static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService();
    }
    return ContactService.instance;
  }

  public getRecipientEmail(): string {
    return this.recipientEmail;
  }

  public buildMailtoUrl(payload: EnquiryPayload): string {
    const subject = encodeURIComponent('New AEV Studios Project Enquiry');
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.company ? `Company: ${payload.company}` : null,
        `Service: ${payload.service}`,
        payload.budget ? `Budget: ${payload.budget}` : null,
        '',
        payload.message,
      ]
        .filter((line) => line !== null)
        .join('\n')
    );

    return `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;
  }

  public async submitEnquiry(formData: FormData, payload: EnquiryPayload): Promise<SubmissionResult> {
    formData.set('_subject', 'New AEV Studios Project Enquiry');
    formData.set('_captcha', 'false');
    formData.set('_template', 'table');

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const res = await fetch(this.formSubmitEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!res.ok) {
        throw new Error(`Form submission failed with status ${res.status}`);
      }
      return { ok: true };
    } catch {
      clearTimeout(timer);
      return {
        ok: false,
        fallbackUrl: this.buildMailtoUrl(payload),
      };
    }
  }
}
