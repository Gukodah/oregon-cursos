// core/domain/value-objects/user-preferences.vo.ts
type NotificationChannel = "whatsapp" | "email" | "push";
type LanguageCode = "pt-BR" | "en-US" | "es-ES";

export class UserPreferences {
  constructor(
    public readonly notificationChannel: NotificationChannel = "whatsapp",
    public readonly language: LanguageCode = "pt-BR",
    public readonly timezone: string = "America/Sao_Paulo",
    public readonly marketingOptIn: boolean = false,
  ) {}

  updatePreferences(update: Partial<UserPreferences>): UserPreferences {
    return new UserPreferences(
      update.notificationChannel ?? this.notificationChannel,
      update.language ?? this.language,
      update.timezone ?? this.timezone,
      update.marketingOptIn ?? this.marketingOptIn,
    );
  }

  equals(other: UserPreferences): boolean {
    return (
      this.notificationChannel === other.notificationChannel &&
      this.language === other.language &&
      this.timezone === other.timezone &&
      this.marketingOptIn === other.marketingOptIn
    );
  }

  toJSON(): object {
    return {
      notificationChannel: this.notificationChannel,
      language: this.language,
      timezone: this.timezone,
      marketingOptIn: this.marketingOptIn,
    };
  }
}
