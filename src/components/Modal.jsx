import { ThemeColor } from '@/constants/themeColor';

function Modal({ isOpen, onClose, children, maxWidth = '640px' }) {
  const { textColor, bgColor, trans } = ThemeColor();
  return (
    <>
      {isOpen ? (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-all ease-in-out duration-500 z-50`}
        >
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div
            className="p-4 rounded-lg z-50 sm:w-[95%] mx-4 mx-auto overflow-auto max-h-[95vh]"
            style={{ maxWidth, backgroundColor: bgColor, color: textColor }}
          >
            <div className="text-right">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
