import Head from "next/head";
import { useEffect, useState } from "react";
import axios from 'axios';


export interface IWebsite {
  url: string;
  status: string; // http status
}

export default function Home() {
  const [websiteData, setWebsiteData]:[IWebsite[], any] = useState([]);
  useEffect(() => {
    // call this function once the page loads
    // REST API
      axios.get('http://localhost:5000/status')
          .then(function (response) {
            // handle success
            console.log(response.data);
            setWebsiteData(response.data);
          })
          .catch(function (error) {
            // TODO: handle error
            console.log(error);
          });
  }, []);
  return (
    <>
      <Head>
        <title>Mintlify Technical Assignment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">Website Status Monitor</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      URL
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      CurrentStatus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    websiteData.map((website:IWebsite, index:number)=>{
                      if (website.status=="200"){
                        return <tr className="border-b bg-green-100 border-green-200" key={index}>
                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index}</td>
                                   <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <a href="url">{website.url}</a>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Avaliable
                                    </td>
                                </tr>
                      }else{
                        return <tr className="border-b bg-light-100 border--200" key={index}>
                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index}</td>
                                   <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <a href="url">{website.url}</a>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Unavaliable
                                    </td>
                                </tr>
                      }
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}