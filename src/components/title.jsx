import React from 'react';
import { useTranslation } from 'react-i18next';

function Loading({ title, raw }) {
  const { t } = useTranslation();
  return <h1 className="title">{title ? t(title) : raw}</h1>;
}

export default Loading;
