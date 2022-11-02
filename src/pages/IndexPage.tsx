import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from 'recoil';

import { countSelectorState, sampleState } from '@states/sampleState';
import ErrorFallbackComponent from '@components/errors/ErrorFallbackComponent';
import UserListComponent from '@components/UserListComponent';
import WebLayout from '@layouts/web/WebLayout';


const IndexPage = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countSelectorState);
  const [userListError, setUserListError] = useState(true);

  const increase = () => setCount(count + 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  const resetUserList = () => {
    setUserListError(true);
  };

  const callAndroidScript = () => {
    window.AppJS.showToast('test');
  };

  return (
    <WebLayout>
      <div>
        <div>Index Page</div>
        <div>{count}</div>
        <div>
          <button onClick={increase}>Increase</button>
        </div>
        <div>{sample.title}</div>
        <div>
          <input type="text" />
          <button onClick={setTitle}>Change title</button>
        </div>
        <div>
          <button onClick={callAndroidScript}>Call Android Javascript</button>
        </div>

        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <UserListComponent />
        </ErrorBoundary>

      </div>
    </WebLayout>
  );
};

export default IndexPage;
