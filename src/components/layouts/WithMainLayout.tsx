import React from "react";

function WithMainLayout(Component: React.ComponentType) {
  return function MainLayout(props: React.ComponentProps<any>) {
    return (
      <main className="App">
        <Component {...props} />
      </main>
    );
  };
}

export default WithMainLayout;
