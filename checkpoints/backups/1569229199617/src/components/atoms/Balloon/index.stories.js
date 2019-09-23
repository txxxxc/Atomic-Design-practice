/*
訂正：紙面掲載のコードにて、
import { withStyle } from '../../utils/decorators.js';
という記述がありますが、この 1 行は必要ありません。
代わりに、
import { withNotes } from '@storybook/addon-notes';
と記述して、withNotes のインポートが必要です。
お手数ですが置き替えて進めてください。
*/

import React from 'react';
import Balloon, { BalloonTip } from './index.js';
import { TrashCanIcon } from '../Icon/index.js';
import { withNotes } from '@storybook/addon-notes';

const note = withNotes('読みやすさを考慮すると10文字くらいが良い');

export default stories =>
  stories
    .add('2文字ラベル', note(() => <Balloon>次へ</Balloon>))
    .add('4文字ラベル', () => <Balloon>削除する</Balloon>)
    .add('10文字ラベル', () => <Balloon>削除したかったらどうする</Balloon>)
    .add('20文字ラベル', () => (
      <Balloon>削除したかったらするけど、どうしたいかな</Balloon>
    ))
    .add('30文字ラベル', () => (
      <Balloon>
        削除したかったらするけど、どうしたいかな。嫌なら、やめようか
      </Balloon>
    ))
    .add('30文字ラベル、改行', () => (
      <Balloon>
        削除したかったらするけど、どうしたいかな。
        <br />
        嫌なら、やめようか
      </Balloon>
    ))
    .add('50文字', () => (
      <p style={{ padding: '50px', width: '300px' }}>
        専門的なことを説明する文章の場合、文章中のある言葉が一般的に使われるものでない場合などに注釈を表示したいときがあります。例えば
        <BalloonTip label="注釈を記述するUI">バルーンチップ</BalloonTip>
        のようなUIを使うことでそれが可能です。
      </p>
    ))
    .add('絶対座標配置', () => (
      <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>
        左上から 200px に配置
      </Balloon>
    ))
    .add('アイコンラベル', () => (
      <Balloon>
        <TrashCanIcon />
      </Balloon>
    ))
    .add('絵文字', () => <Balloon>❌</Balloon>)
    .add('バルーンチップ', () =>
      withStyle({ marginTop: '50px' })(
        <p>
          ここに<BalloonTip label="注釈を記述するUI">バルーンチップ</BalloonTip>
          を表示
        </p>
      )
    );
