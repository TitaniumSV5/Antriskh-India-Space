import React from 'react';
import '../CSS/loader.css';
import BannerCard from '../util/BannerCard.js';
import { Drawer } from 'vaul';
import Skeleton1 from '../util/Textskeleton.js';

function UpLaunchData({ launches }) {
  if (!launches || launches.length === 0) {
    return <p>No launches found.</p>;
  }

  return (
    <div>
      {launches.map(launch => (

        <Drawer.Root>
          <Drawer.Trigger>
            <BannerCard key={launch.id}
              missionName={launch.missionName}
              launchdatetime={launch.launchdatetime}
              launchpad={launch.launchpad}
              stats1={launch.stats1}
              stats2={launch.stats2}
              coverimage={launch.coverimage}
              createdBy={launch.createdBy}>

            </BannerCard>
          </Drawer.Trigger>

          {/* {Information content inside Drawer Portal} */}
          <Drawer.Portal>
            {/* <Drawer.Overlay className="fixed inset-0 bg-white opacity-10" /> */}
            <Drawer.Content className=' bg-white flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0 '>

              {/* {Drawer Handle} */}
              <Drawer.Handle className="bg-gray-500 mb-8 mt-5" />

              {/* {Drawer Title} */}
              <Drawer.Title className=' w-full mx-20 py-3 text-left text-4xl text-blue-700 font-semibold shadow'>{launch.missionName}</Drawer.Title>

              <div className='flex flex-col items-center overflow-auto mx-10'>

                {/* {InfoBanner Image Card} */}
                <div className='w-[95%] h-[100%] mt-5 rounded-[37px] shadow-md bg-cover bg-center bg-no-repeat p-40 flex flex-col justify-center' style={{
                  backgroundImage: `url(${launch.coverimage.url})`,

                }}>
                  <p>Text</p>
                </div>

                <div className='w-[96%] flex flex-col items-start mx-5 mt-10' >
                  <p className='w-[100%] text-left text-blue-700 text-3xl font-semibold shadow'> Launch Details</p>
                  <table className="w-[50%] ml-2 mt-6 mb-5">
                    <thead>
                      <tr className='px-10 text-gray-500 font-medium'>
                        <th className='text-center border-b-[4px] rounded-full border-b-blue-600 py-2'>PROFILE</th>
                        <th className='text-center border-b-[4px] rounded-full border-b-blue-600 py-2'>PARAMETERS</th>
                        
                      </tr>
                    </thead>
                    <tbody className='p-10 text-lg'>
                      <tr className='border-b-[1px] border-gray-300'>
                        <td className='font-bold px-6 py-1'>Lift Off </td>
                        <td className='text-right px-6 py-1'>SDSC SHAR : First Launch Pad</td>
                        
                      </tr>
                      <tr className='border-b-[1px] border-gray-300'>
                        <td className='font-bold px-6 py-1'>Rocket</td>
                        <td className='text-right px-6 py-1'>Small Satellite Launch Vehicle (SSLV) </td>
                        
                      </tr>
                      <tr className='border-b-[1px] border-gray-300'>
                        <td className='font-bold px-6 py-1'>Variant</td>
                        <td className='text-right px-6 py-1'>--</td>
                        
                      </tr>
                      <tr className='border-b-[1px] border-gray-300'>
                        <td className='font-bold px-6 py-1'>Payload</td>
                        <td className='text-right px-6 py-1'>YTD</td>
                        
                      </tr>
                      <tr className='border-b-[1px] border-gray-300'>
                        <td className='font-bold px-6 py-1'>Payload Mass</td>
                        <td className='text-right px-6 py-1'>N/A</td>
                        
                      </tr>
                      <tr className='border-b-[1px] border-gray-300'>
                        <td className='font-bold px-6 py-1' >Orbit </td>
                        <td className='text-right px-6 py-1'>Low Earth Orbit</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
               
                <p className='w-[96%] text-center mt-5'>
                  But I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a complete
                  account of the system, and expound the actual teachings of the
                  great explorer of the truth, the master-builder of human
                  happiness. No one rejects, dislikes, or avoids pleasure itself,
                  because it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful. Nor again is there anyone who loves or pursues
                  or desires to obtain pain of itself, because it is pain, but
                  because occasionally circumstances occur in which toil and pain
                  can procure him some great pleasure. To take a trivial example,
                  which of us ever undertakes laborious physical exercise, except to
                  obtain some advantage from it? But who has any right to find fault
                  with a man who chooses to enjoy a pleasure that has no annoying
                  consequences, or one who avoids a pain that produces no resultant
                  pleasure?
                </p>
                <p className='w-[96%] text-center mt-5'>
                  But I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a complete
                  account of the system, and expound the actual teachings of the
                  great explorer of the truth, the master-builder of human
                  happiness. No one rejects, dislikes, or avoids pleasure itself,
                  because it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful. Nor again is there anyone who loves or pursues
                  or desires to obtain pain of itself, because it is pain, but
                  because occasionally circumstances occur in which toil and pain
                  can procure him some great pleasure. To take a trivial example,
                  which of us ever undertakes laborious physical exercise, except to
                  obtain some advantage from it? But who has any right to find fault
                  with a man who chooses to enjoy a pleasure that has no annoying
                  consequences, or one who avoids a pain that produces no resultant
                  pleasure?
                </p>
              </div>

            </Drawer.Content>

          </Drawer.Portal>
        </Drawer.Root>
      ))}
    </div>
  );
}

export default UpLaunchData;
