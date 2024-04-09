const intro = {
    head1: '',
    p1: '',
    head2: '',
    p2: '',
    head3: '',
    p3: '',
    head4: '',
    p4: '',
}

fetch('index.json')
    .then(response => response.json())
    .then(data => {
        intro.head1 = data.head1;
        intro.p1 = data.p1;
        intro.head2 = data.head2;
        intro.p2 = data.p2;
        intro.head3 = data.head3;
        intro.p3 = data.p3;
        intro.head4 = data.head4;
        intro.p4 = data.p4;
    })
    .catch(error => console.error('Error fetching data', error));