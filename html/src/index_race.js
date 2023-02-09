const create_racedescription_elem = (data) => {
    const ul = document.createElement('ul');
    ul.className = 'raceinfo-list'

    const li_round   = document.createElement('li');
    const sp_racenum = document.createElement('span');
    sp_racenum.className = 'racenumber';

    sp_racenum.innerText  = String(Number(data['round']));
    li_round.appendChild(sp_racenum);

    ul.appendChild(li_round);

    const li_detail  = document.createElement('li');
    const div_name   = document.createElement('div')
    const div_detail = document.createElement('div')

    div_name.innerText   = data['name'] ? data['name'] : data['jyoken'];
    div_detail.innerText = data['track'] + data['kyori'];

    li_detail.appendChild(div_name)
    li_detail.appendChild(div_detail)

    ul.appendChild(li_detail);

    return ul;
}

const create_race_elem = (data) => {
    const li = document.createElement('li');
    const racedescription = create_racedescription_elem(data);

    const a = document.createElement('a');
    a.href = 'chart.html?id=' + data['id'];
    a.appendChild(racedescription);

    li.appendChild(a);

    return li;
}

const create_venue_elem = (target_venue) => {
    const li_venue = document.createElement('li');

    const head = document.createElement('h1');
    head.innerText = target_venue['venue'];

    li_venue.appendChild(head);

    const ul_race = document.createElement('ul');
    ul_race.className = 'race-list';

    for (race in target_venue['races']) {
        const target_race = target_venue['races'][race];
        const li = create_race_elem(target_race);

        ul_race.appendChild(li);
    }

    li_venue.appendChild(ul_race);

    return li_venue;
}

const create_venue_list = (data) => {
    const ul_venue = document.createElement('ul');
    ul_venue.className = 'venue-list';

    for (venue in data['race_info']) {
        const li = create_venue_elem(data['race_info'][venue])
        ul_venue.appendChild(li);
    }

    return ul_venue;
}

