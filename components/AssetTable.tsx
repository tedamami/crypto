import React, { useState, useEffect } from 'react';
import { Asset } from '../pages/api/assets';
import Image from 'next/image';

const AssetTable: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const response = await fetch('/api/assets');
      const data = await response.json();
      setAssets(data);
    };
    fetchAssets();
  }, []);

  return (
    <div className="mt-8 overflow-x-auto border border-[#4F4F4F] rounded-[10px] px-6 py-4 bg-black">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-[#FFFFFF] border-b border-[#4F4F4F]">
            <th className="py-3 px-4 font-family: Roboto, text-left sm:py-2 sm:px-2">ASSETS</th>
            <th className="py-3 px-4 text-left sm:py-2 sm:px-2">LAST TRADE</th>
            <th className="py-3 px-4 text-right sm:py-2 sm:px-2">24H%</th>
            <th className="py-3 px-4 text-right sm:py-2 sm:px-2">24H CHANGE</th>
            <th className="py-3 px-4 text-right sm:py-2 sm:px-2" style={{ color: '#3980FF' }}>MORE &gt;</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.id}
              className={`${asset.dayChange >= 0 ? 'text-green-500' : 'text-red-500'} sm:text-xs`}
                style={{
    height: '80px',
    padding: '8px 0',
    fontFamily:'Roboto',
    fontSize:18,
    fontWeight:500,
  }}
            >
              <td className="py-2 px-4 text-left sm:py-1 sm:px-2 flex items-center gap-2" style={{ color: '#FFFFFF' }}>
              <Image
  src={`/assets/${asset.image}`}
  alt="image"
  width={64}
  height={64}
  className="sm:w-12 sm:h-12 w-16 h-16 object-contain"
/>
                <span className="sm:hidden">{asset.assets}</span>
                <span className="hidden sm:inline">{asset.assets.slice(0, 3)}</span>
                <span style={{ color: '#666666' }}>/USD</span>
              </td>
              <td className="py-2 px-4 text-left sm:py-1 sm:px-2" style={{ color: '#FFFFFF' }}>
                <span className="sm:hidden">{asset.lastTrade}</span>
                <span className="hidden sm:inline">{asset.lastTrade.slice(0, 8)}</span>
              </td>
              <td className={`py-2 px-4 text-right sm:py-1 sm:px-2 ${asset.assets === "DOGE" ? 'text-[#6DFFDC]' : asset.assets === "ALGO" || asset.assets === "DOT" || asset.assets === "UNI" ? 'text-[#666666]' : ''}`}>
                {asset.dayChange.toFixed(2)}%
              </td>
              <td className={`py-2 px-4 text-right sm:py-1 sm:px-2 ${asset.assets === "DOGE" ? 'text-[#6DFFDC]' : asset.assets === "ALGO" || asset.assets === "DOT" || asset.assets === "UNI" ? 'text-[#666666]' : ''}`}>
                ${asset.dayChangeAmount.toFixed(2)}
              </td>
              <td className="py-2 px-4 text-right sm:py-1 sm:px-2">
                <button
                  className="bg-[#6DFF8B] text-black py-2 px-4  hover:bg-[#5FE67E] sm:py-1 sm:px-2 sm:text-xs"
                >
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;