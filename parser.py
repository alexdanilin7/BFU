import json


def parse_data(data: str) -> list:
    """Переформатирует данные

    Args:
        data (str): данные с сервера

    Returns:
        list: переформатированные данные
    """

    data = json.loads(data)
    arr, idx = [], -1

    for el in data:
        abs = []
        for a in el['Abits']:
            idx += 1
            a['Napravlenie'] = el['Napravlenie'].replace('/', '|')
            a['Osnovanie'] = el['Osnovanie']
            a['IDS'] = [] if 'IDS' not in el.keys() else el['IDs']
            a['TrainingLevel'] = el['TrainingLevel']
            a['Form'] = el['Form']
            a['Plan'] = el['Plan']
            a['Vstupitelnie'] = [] if 'Vstupitelnie' not in el.keys() else list(map(
                lambda el: el.replace('Предмет: ', '').replace(', форма испытания:', ','), a['Vstupitelnie']))
            a['idx'] = idx
            abs.append(a)

        arr += abs

    return arr


def get_statistic(data: list):
    """Возвращает json для статистики

    Args:
        data (list): масив, пропущенный через функцию parse_data
    """

    return {
        **_make_statistic(data, 'TrainingLevel', 'Уровень образования'),
        **_make_statistic(data, 'Osnovanie', 'Финансовая основа'),
        **_make_statistic(data, 'Form', 'Форма обучения'),
    }


def _make_statistic(data: list, key: str, translated_key: str) -> dict:
    """Приватная функция, инкапсулирующая бизнес логику

    Args:
        data (list): масив, пропущенный через функцию parse_data
        key (str): Ключ в словаре data

    Returns:
        dict: слова состоящий из ключа translated_key и обаботанных данных
    """
    qs = {}

    for user in data:
        try:
            qs[user[key]] += 1
        except KeyError:
            qs[user[key]] = 1

    return {{translated_key}: qs}
