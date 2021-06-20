import json


def parse_data(data: str) -> list:
    data = json.loads(data)
    print(data)
    arr, idx = [], -1

    for el in data:
        abs = []
        for a in el['Abits']:
            idx += 1
            a['Napravlenie'] = el['Napravlenie'].replace('/', '|')
            a['Osnovanie'] = el['Osnovanie']
            a['IDs'] = [] if 'IDS' not in  el.keys() else el['IDs']
            a['TrainingLevel'] = el['TrainingLevel']
            a['Form'] = el['Form']
            a['Plan'] = el['Plan']
            a['Vstupitelnie'] = list(map(lambda el: el.replace('Предмет: ', '').replace(', форма испытания:', ','), a['Vstupitelnie']))
            a['idx'] = idx
            abs.append(a)

        arr += abs

    return arr


