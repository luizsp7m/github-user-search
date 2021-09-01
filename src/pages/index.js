import { Fragment } from 'react';

import Layout from '../components/Layout'

import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>GitHub User Search</title>
      </Head>
      
      <Layout />
    </Fragment>
  );
}
