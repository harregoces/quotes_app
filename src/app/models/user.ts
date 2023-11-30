export class User {
  id: number;
  name: string;
  email: string;
  emailVerifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.emailVerifiedAt = new Date(data.email_verified_at);
    this.createdAt = new Date(data.created_at);
    this.updatedAt = new Date(data.updated_at);
  }
}
