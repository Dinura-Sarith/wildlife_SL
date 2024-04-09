const parks = {
    main1: '',
    main2: '',
    par1: '',
    main3: '',
    par2: '',
    main4: '',
    par3: '',
    main5: '',
    par4: '',
}

fetch('page_2.json')
    .then(response => response.json())
    .then(data => {
        parks.main1 = data.main1;
        parks.main2 = data.main2;
        parks.par1 = data.par1;
        parks.main3 = data.main3;
        parks.par2 = data.par2;
        parks.main4 = data.main4;
        parks.par3 = data.par3;
        parks.main5 = data.main5;
        parks.par4 = data.par4;

    })
    .catch(error => console.error('Error fetching data', error));