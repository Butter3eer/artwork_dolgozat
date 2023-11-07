import { Artwork } from './Artwork';

export class Statue implements Artwork {
    constructor(public title: string, public year: string, public price: number, public height: number) {
        const titleRegex : RegExp = new RegExp("^[a-z, ]+$", "gi");
        const now = new Date();

        if (title == null) {
            throw new Error("A 'Title' nem lehet üres.");
        }
        else if (!titleRegex.test(title)) {
            throw new Error("A 'Title' csak angol ABC, space, és vessző karaktert tartalmazhat!");
        } 
        else if (year == null) {
            throw new Error("A 'Year' nem lehet üres.");
        }
        else if (Number.parseInt(year) > now.getFullYear()) {
            throw new Error("A 'Year' nem lehet több, mint az aktuális évszám.");
        }
        else if (price == null) {
            throw new Error("A 'Price' nem lehet üres.");
        }
        else if (price < 1) {
            throw new Error("A 'Price' nem lehet kevesebb, mint 1 Ft.");
        }
        else if (height == null) {
            throw new Error("A 'Height' nem lehet üres.");
        }
        else if (height < 10) {
            throw new Error("A 'Height' nem lehet 10 cm-nél kisebb.");
        }
    }
}