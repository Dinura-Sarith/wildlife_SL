const yala = {
    head1: '',
    p1: '',
    head2: '',
    p2: '',
    head3: '',
    p3: '',
    head4: '',
    head5: '',
}

fetch('page_7.json')
    .then(response => response.json())
    .then(data => {
        yala.head1 = data.head1;
        yala.p1 = data.p1;
        yala.head2 = data.head2;
        yala.p2 = data.p2;
        yala.head3 = data.head3;
        yala.p3 = data.p3;
        yala.head4 = data.head4;
        yala.head5 = data.head5;

    })
    .catch(error => console.error('Error fetching data', error));