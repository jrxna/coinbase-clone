import { MdEdit } from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';
import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { Table, TableRowSelectAsset, TableRowInputText } from '..';

const TableInputSend = () => {
  const { handleSelectAssetOpenClick, selectedCoin } =
    useContext(SelectAssetContext);
  return (
    <Table isInputTable>
      <tbody>
        <TableRowSelectAsset
          handleSelectAssetOpenClick={handleSelectAssetOpenClick}
          helperText='Pay with'
          assetName={selectedCoin?.name}
          assetIcon={selectedCoin?.icon}
          selectAssetType='selectCoin'
        />
        <TableRowInputText
          helperText='To'
          inputPlaceholder={'Mobile, email or address'}
          icon={<FaWallet />}
          iconSize={16}
        />
        <TableRowInputText
          helperText='Note'
          inputPlaceholder={'Optional message'}
          icon={<MdEdit />}
          iconSize={21}
        />
      </tbody>
    </Table>
  );
};

export default TableInputSend;
