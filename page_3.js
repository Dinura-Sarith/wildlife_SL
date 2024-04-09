const species = {
    head1: '',
    p1: '',
    head2: '',
    p2: '',
    head3: '',
    p3: '',
    head4: '',
    p4: '',
    head5: '',
    p5: '',
    head6: '',
    p6: '',
}

fetch('page_3.json')
    .then(response => response.json())
    .then(data => {
        species.head1 = data.head1;
        species.p1 = data.p1;
        species.head2 = data.head2;
        species.p2 = data.p2;
        species.head3 = data.head3;
        species.p3 = data.p3;
        species.head4 = data.head4;
        species.p4 = data.p4;
        species.head5 = data.head5;
        species.p5 = data.p5;
        species.head6 = data.head6;
        species.p6 = data.p6;
    })