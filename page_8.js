const wilp = {
    head1: '',
    p1: '',
    head2: '',
    p2: '',
    head3: '',
    p3: '',
    head4: '',
    head5: '',
}

fetch('page_8.json')
    .then(response => response.json())
    .then(data => {
        wilp.head1 = data.head1;
        wilp.p1 = data.p1;
        wilp.head2 = data.head2;
        wilp.p2 = data.p2;
        wilp.head3 = data.head3;
        wilp.p3 = data.p3;
        wilp.head4 = data.head4;
        wilp.head5 = data.head5;

    })
    .catch(error => console.error('Error fetching data', error));