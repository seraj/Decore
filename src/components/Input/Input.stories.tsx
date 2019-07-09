import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import Input from './Input';

const stories = storiesOf('Components/Input', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <Input>
      {text('Label', 'Default')}
    </Input>
  )),
);
