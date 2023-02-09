const create_prob_tansyo_elem = (data) => {
    const div       = document.createElement('div');
    div.className   = "prob-tansyo-elem";

    const div_umaban_name = document.createElement('div');
    const div_umaban = document.createElement('div');
    const div_name   = document.createElement('div');
    const div_prob   = document.createElement('div');

    div_umaban_name.className = "prob-tansyo-umaban-name";
    div_umaban.className = "prob-tansyo-umaban";
    div_name.className   = "prob-tansyo-name";
    div_prob.className   = "prob-tansyo-prob";

    div_umaban.innerText = String(Number(data['umaban']));
    div_name.innerText   = data['name'];
    div_prob.innerText   = Math.round(data['prob'] * 1000) / 1000;

    div_umaban_name.appendChild(div_umaban);
    div_umaban_name.appendChild(div_name  );

    div.appendChild(div_umaban_name);
    div.appendChild(div_prob  );

    return div;
}

const create_prob_tansyo_div = (data) => {
    const div = document.createElement('div');
    div.className = 'prob-tansyo-div';

    for (index in data['tansyo']) {
        const elem = create_prob_tansyo_elem(data['tansyo'][index]);
        div.appendChild(elem);
    }

    return div;
}

function draw_prob_tansyo() {
    if (this.readyState !== XMLHttpRequest.DONE || this.status != 200) {return};

    // convert json into drawing data fomat 
    var ptan_data = JSON.parse(this.responseText);

    ptan_data['tansyo'].sort( (a, b) => {
        return b.prob - a.prob;
    });

    div = create_prob_tansyo_div(ptan_data);

    var tansyo_pane = document.getElementById('prob-tansyo-pane');
    tansyo_pane.appendChild(div);
}
