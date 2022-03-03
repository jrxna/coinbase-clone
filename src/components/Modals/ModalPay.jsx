import { Tab, Modal } from '..';
import { TABS_PAY } from '../../constants/tabs-pay';

const ModalPay = ({ isModalOpen, setIsModalOpen }) => {
	console.log(isModalOpen);

	return (
		<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
			<Tab data={TABS_PAY} />
		</Modal>
	);
};

export default ModalPay;
