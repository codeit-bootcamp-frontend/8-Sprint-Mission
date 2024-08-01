import React from 'react';

/**
* 1. Add GLOBAL CSS files here. Typical candidates are added automatically :
*/
import './src/styles/global.css';

/**
 * 2. You can also add global providers here.
 *    You don't have to do this from the beginning, as simple dumb components will be rendered just okay without this.
 *    Come back here when you need to add global providers.
 *    Examples are given as comments.
 *    Refer to htts://www.visualwind.dev/configuration for further details.
 */
export default function Wrapper({ children: YOUR_COMPONENT }: React.PropsWithChildren): React.ReactElement {
	return (
    <>
      {/* Place global providers here, common providers are given below, for example:*/}
      {/* <ReactQueryProvider client={queryClient}>*/}
      {/* <ReduxProvider store={reduxStore}> */}
      {/* <ThemeProvider> */}
      {YOUR_COMPONENT}
      {/* </ThemeProvider> */}
      {/* </ReduxProvider> */}
      {/* </ReactQueryProvider> */}
    </>
  );
}

/**
 * 3. Now settings are done, you can:
 *    - save this file,
 *    - open your COMPONENT file again,
 *    - hit the arrow icon on the top right corner to render to start.
 */