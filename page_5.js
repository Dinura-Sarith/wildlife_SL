const conservation = {
    head1: '',
    p1: '',
    head2: '',
    head3: '',
    head4: '',
    head5: '',
    head6: '',
    head7: '',

}

fetch('page_5.json')
    .then(response => response.json())
    .then(data => {
        conservation.head1 = data.head1;
        conservation.p1 = data.p1;
        conservation.head2 = data.head2;
        conservation.head3 = data.head3;
        conservation.head4 = data.head4;
        conservation.head5 = data.head5;
        conservation.head6 = data.head6;
        conservation.head7 = data.head7;
    })
    .catch(error => console.error('Error fetching data', error));