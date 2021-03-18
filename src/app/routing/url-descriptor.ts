export class UrlDescriptor {
    public link: string;
    public language: string;

    constructor(link: string, language: string) {
        this.link = link;
        this.language = language;
    }

    public isDefault(): boolean {
        return this.language === 'en';
    }
}