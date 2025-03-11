const requestURL = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

const request = async () => {
  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error("error fetching data");
    } else {
      const convertJSON = await response.json();
      const body = document.body;
      convertJSON.items.forEach((element, index) => {
        //Tocmai am adăugat asta, nu este o soluție optimă, dar funcționează
        if (index !== 0) return;
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        body.append(wrapper);

        const ambalaj = document.createElement('div');
        ambalaj.classList.add('ambalaj');
        wrapper.append(ambalaj);

        // patrate galbene
        const line1 = document.createElement('div');
        line1.classList.add('line1');
        ambalaj.append(line1);

        const line2 = document.createElement('div');
        line2.classList.add('line2');
        ambalaj.append(line2);

        const line3 = document.createElement('div');
        line3.classList.add('line3');
        ambalaj.append(line3);

        // header rosso
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
        line3.append(content3);

        const language = document.createElement('p');
        language.textContent = element.volumeInfo.language;
        content3.append(language);

        const title = document.createElement('p');
        title.textContent = element.volumeInfo.title;
        content3.append(title);

        const saleability = document.createElement('p');
        saleability.textContent = element.saleInfo.saleability;
        content3.append(saleability);

        const description = document.createElement('p');
        description.textContent = element.volumeInfo.description;
        content3.append(description);

        const pageCount = document.createElement('p');
        pageCount.textContent = element.volumeInfo.pageCount;
        content3.append(pageCount);

        const publishedDate = document.createElement('p');
        publishedDate.textContent = element.volumeInfo.publishedDate;
        content3.append(publishedDate);

        const thumbnail = document.createElement('img');
        thumbnail.src = element.volumeInfo.imageLinks.thumbnail;
        content3.append(thumbnail);

        const authors = document.createElement('p');
        authors.textContent = element.volumeInfo.authors;
        content3.append(authors);

        const country = document.createElement('p');
        country.textContent = element.accessInfo.country;
        content3.append(country);
      });
    }
  } catch (error) {
    console.error('error occurred', error);
  }
};
request();
