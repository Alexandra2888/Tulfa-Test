import { X } from "lucide-react";
import Button from "../../atoms/Button/Button";

const GalleryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/30 flex items-center justify-center p-4"
      data-testid="gallery-modal"
    >
      <div className="relative w-full max-h-[90vh] overflow-y-auto bg-white rounded-lg md:w-[90%] lg:w-[80%] xl:w-[1200px]">
        {/* Header */}
        <div className="sticky top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/50 to-transparent z-10">
          <Button
            onClick={onClose}
            className="text-white hover:text-gray-300"
            data-testid="close-button"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="px-4 pb-8" data-testid="modal-content">
          <div className="space-y-6">
            {/* First Section - Large Image with Text */}
            <div className="relative w-full aspect-video mb-4">
              <img
                src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231350/tulfa/Close%20Up%20Shots/view-of-a-modern-lounge-room-2024-05-27-19-05-26-utc_ddngbx.jpg"
                alt="Main view"
                className="w-full h-full object-cover rounded-lg"
                data-testid="main-image"
              />
              <p
                className="text-black text-center mt-4 max-w-2xl mx-auto"
                data-testid="main-image-caption"
              >
                Lorem ipsum dolor sit amet consectetur. Morbi id eget elementum
                ornare.
              </p>
            </div>

            {/* Image Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-testid="image-grid"
            >
              {/* Row 1 */}
              <div className="aspect-square">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231286/tulfa/Close%20Up%20Shots/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc_q38uc1.jpg"
                  alt="Grid 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231211/tulfa/Close%20Up%20Shots/lounge-room-2024-01-22-18-27-58-utc_yb6t4k.jpg"
                  alt="Grid 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Row 2 */}
              <div className="aspect-square">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731230802/tulfa/Close%20Up%20Shots/2_uigfcm.jpg"
                  alt="Grid 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731230897/tulfa/Close%20Up%20Shots/lounge-room-2024-01-22-18-27-58-utc_1_m4nda3.jpg"
                  alt="Grid 4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Row 3 - Full width image */}
              <div className="col-span-1 sm:col-span-2 aspect-[2/1]">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731230959/tulfa/Close%20Up%20Shots/lounge-room-2024-01-22-18-27-58-utc_2_v2htnp.jpg"
                  alt="Grid 5"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Row 4 */}
              <div className="aspect-square">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231245/tulfa/Close%20Up%20Shots/screw-for-furniture-assembly-close-up-2023-11-27-04-51-33-utc_kpcnra.jpg"
                  alt="Grid 6"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231257/tulfa/Close%20Up%20Shots/stylish-chest-of-drawers-close-up-furniture-for-2024-01-18-18-28-52-utc_viecz4.jpg"
                  alt="Grid 7"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Row 5 - Full width image */}
              <div className="col-span-1 sm:col-span-2 aspect-[2/1]">
                <img
                  src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731230802/tulfa/Close%20Up%20Shots/2_uigfcm.jpg"
                  alt="Grid 8"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
