
const to_date_string = (date) => {
    const year  = date.substr(0, 4);
    const month = date.substr(4, 2);
    const day   = date.substr(6, 2);

    const d = new Date(year + '-' + month + '-' + day); 
    const day_of_week = [ "日", "月", "火", "水", "木", "金", "土" ][d.getDay()];
    return  year + '年' + month + '月' + day + '日(' + day_of_week + ')';
}

const create_mainrace_elem = (venue) => {
    const li_mainrace = document.createElement('li');

    const sp_venue    = document.createElement('span');
    const sp_mainrace = document.createElement('span');

    sp_venue.className = 'mainrace-left'

    sp_venue.innerText    = venue['venue'];
    sp_mainrace.innerText = venue['races'][10]['name'];

    li_mainrace.appendChild(sp_venue);
    li_mainrace.appendChild(sp_mainrace);

    return li_mainrace;
}

const create_date_elem = (data) => {
    const li_date = document.createElement('li');

    const div  = document.createElement('div');
    div.className = 'date-containt';

    const a   = document.createElement('a');
    a.href    = window.location.href + '?date=' + data['date'];

    const sp_date = document.createElement('span');
    sp_date.className = 'date-containt-date';
    sp_date.innerText = to_date_string(data['date']);

    const ul_mainrace = document.createElement('ul');
    ul_mainrace.className = 'mainrace-list'
    for (venue in data['race_info']) {
        const li = create_mainrace_elem(data['race_info'][venue]);
        ul_mainrace.appendChild(li);
    }

    a.appendChild(sp_date)
    a.appendChild(ul_mainrace);

    div.appendChild(a);

    li_date.appendChild(div);
    return li_date;
}

const create_date_list = (datapack) => {
    const ul_date = document.createElement('ul');
    ul_date.className = 'date-list';

    for (date in datapack['data'].reverse()) {
        const li_data = create_date_elem(datapack['data'][date]);
        ul_date.appendChild(li_data);
    }

    return ul_date;
}

