const requestURL = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

const request = async() => {
    try {
        const response = await fetch(requestURL)
        if (!response.ok) {
            throw new Error("error fetching data");
        } else {
            const convertJSON = await response.json();
            convertJSON.items.forEach(element => {
                console.log(element);
                const body = document.body;

                const wrapper = document.createElement('div');
                wrapper.classList.add('wrapper');
                body.append(wrapper);

                const ambalaj = document.createElement('div');
                ambalaj.classList.add('ambalaj');
                wrapper.append(ambalaj);

                // patrate galbene
                const line1 = document.createElement('div');
                line1.classList.add('line1');
                wrapper.append(line1);

                const line2 = document.createElement('div');
                line2.classList.add('line2');
                wrapper.append(line2);

                const line3 = document.createElement('div');
                line3.classList.add('line3');
                wrapper.append(line3);

                // header rosii
                const header1 = document.createElement('div');
                header1.classList.add('header1');
                header1.textContent = 'ID';
                line1.append(header1);

                const header2 = document.createElement('div');
                header2.classList.add('header2');
                header2.textContent = 'KIND';
                line2.append(header2);

                const header3 = document.createElement('div');
                header3.classList.add('header3');
                header3.textContent = 'BODY';
                line3.append(header3);

                // patrate albastre - content
                const content1 = document.createElement('div');
                content1.classList.add('content1');
                content1.textContent = element.id;
                line1.append(content1);

                const content2 = document.createElement('div');
                content2.classList.add('content2');
                content2.textContent = element.kind;
                line2.append(content2);

                const content3 = document.createElement('div');
                content3.classList.add('content3');
                content3.textContent = element.volumeInfo.language;
                content3.textContent = element.volumeInfo.title;
                content3.textContent = element.saleInfo.saleability;
                content3.textContent = element.volumeInfo.description;
                content3.textContent = element.volumeInfo.pageCount;
                content3.textContent = element.volumeInfo.publishedDate;

                const thumbnail = document.createElement('img');
                content3.append(thumbnail);
                thumbnail.src = element.volumeInfo.imageLinks.thumbnail;

                content3.textContent = element.volumeInfo.authors;
                content3.textContent = element.accessInfo.country;
                line3.append(content3);
            });
        }
    } catch (error) {
        console.error('error occurred', error);
    }
}
request()



