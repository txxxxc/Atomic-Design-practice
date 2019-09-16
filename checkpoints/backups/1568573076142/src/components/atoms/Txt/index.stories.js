import React from 'react';
import Txt, { InfoTxt, WarningTxt } from './index';

export default stories =>
  stories
    .add('text -s', () => <Txt size="s">テキストを表示</Txt>)
    .add('text -m', () => <Txt>テキストを表示</Txt>)
    .add('text -l', () => <Txt size="l">テキストを表示</Txt>)
    .add('infotext -s', () => <InfoTxt size="s">情報テキストを表示</InfoTxt>)
    .add('infotext -m', () => <InfoTxt>情報テキストを表示</InfoTxt>)
    .add('infotext -l', () => <InfoTxt size="l">情報テキストを表示</InfoTxt>)
    .add('warntext -s', () => (
      <WarningTxt size="s">警告テキストを表示</WarningTxt>
    ))
    .add('warntext -m', () => <WarningTxt>警告テキストを表示</WarningTxt>)
    .add('warntext -l', () => (
      <WarningTxt size="l">警告テキストを表示</WarningTxt>
    ));
