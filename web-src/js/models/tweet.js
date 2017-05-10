import dateFormatter from 'dateformat';

class Tweet {
    contructor() {
        this.author = null;
        this.createdDate = null;
        this.favoritesCount = 0;
        this.media = [];
        this.retweetsCount = 0;
        this.text = null;
    }

    getAuthor() {
        return this.author;
    }

    getFavoritesCount() {
        return this.favoritesCount;
    }

    getFormattedCreatedDate() {
        const now = new Date();
        if (dateFormatter(now, 'm/d/yyyy') === dateFormatter(this.createdDate, 'm/d/yyyy')) {
            return dateFormatter(this.createdDate, 'h:MM TT');
        }

        if (dateFormatter(now, 'yyyy') === dateFormatter(this.createdDate, 'yyyy')) {
            return dateFormatter(this.createdDate, 'mmm d');
        }

        return dateFormatter(this.createdDate, 'mmm d, yyyy');
    }

    getImage() {
        try {
            return this.media[0].media_url_https;
        } catch (e) {
            return null;
        }
    }

    getRetweetsCount() {
        return this.retweetsCount;
    }

    getText() {
        return this.text;
    }

    hasMedia() {
        try {
            return (this.media.length > 0);
        } catch(e) {
            return false;
        }
    }

    setAuthor(value) {
        this.author = value;
    }

    setCreatedDate(value) {
        this.createdDate = value;
    }

    setFavoritesCount(value) {
        this.favoritesCount = value;
    }

    setRetweetsCount(value) {
        this.retweetsCount = value;
    }

    setMedia(entities) {
        try {
            this.media = entities.media.length > 0 ? entities.media : [];
        } catch(e) {}
    }

    setText(value) {
        this.text = value;
    }
}

module.exports = Tweet;