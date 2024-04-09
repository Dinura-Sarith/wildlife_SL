const lep = {
    head1: '',
    p1: '',
    head2: '',
    head3: '',
    p3: '',
    head4: '',
    p4: '',
    head5: '',
    p5: '',
    head6: '',
    head7: '',
    p7: '',
    head8: '',
    p8: '',
    p9: '',

}

fetch('page_4.json')
    .then(response => response.json())
    .then(data => {
        lep.head1 = data.head1;
        lep.p1 = data.p1;
        lep.head2 = data.head2;
        lep.head3 = data.head3;
        lep.p3 = data.p3;
        lep.head4 = data.head4;
        lep.p4 = data.p4;
        lep.head5 = data.head5;
        lep.p5 = data.p5;
        lep.head6 = data.head6;
        lep.head7 = data.head7;
        lep.p7 = data.p7;
        lep.head8 = data.head8;
        lep.p8 = data.p8;
        lep.p9 = data.p9;
    })
    .catch(error => console.error('Error fetching data', error));