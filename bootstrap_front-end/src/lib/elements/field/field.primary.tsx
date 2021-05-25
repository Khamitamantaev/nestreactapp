import React from 'react';
import { FieldContainer, Title, ErrorMessage, Input} from '../layout';
import { FieldPrimaryPropsType } from './field.type';
import { text } from '../../common/text';

export function FieldPrimary(props: FieldPrimaryPropsType) {
  const { titleTid, onChange, onBlur,value, name, placeholderTid, error } = props;

  return (
    <FieldContainer>
      <Title tid={titleTid} />
      <Input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
}








