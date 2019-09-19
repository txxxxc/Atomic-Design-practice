import React from 'react';

export function containPresenter(Container, Presenter) {
  return props => {
    console.log(props);
    return (
      <Container
        presenter={presenterProps => <Presenter {...presenterProps} />}
        {...props}
      />
    );
  };
}
