import React from 'react';
import { Flex, Result } from 'antd';

const App: React.FC = () => (
    <Flex align="center" justify="center" style={{ height: '100vh' }}>
        <Result
            status="500"
            title="500"
            subTitle="Sorry, server get error. Come back later!!"
        />
    </Flex>
);

export default App;
