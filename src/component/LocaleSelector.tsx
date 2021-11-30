import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const enum Locale {
  Ko = 'ko',
  En = 'en',
}

export const LocaleSelector = () => {
  const { i18n } = useTranslation();

  const onChangeLocale = (selectedLocale: Locale) => {
    i18n.changeLanguage(selectedLocale);
  };

  return (
    <Select
      key='locale'
      defaultValue={Locale.Ko}
      style={{ width: 120 }}
      onChange={onChangeLocale}
    >
      <Option key={Locale.Ko} value={Locale.Ko}>
        한국어
      </Option>
      <Option key={Locale.En} value={Locale.En}>
        English
      </Option>
    </Select>
  );
};
