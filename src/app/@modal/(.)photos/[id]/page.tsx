import React from 'react';
import swagPhoto from '../../../../../photos';
import Modal from '../../../components/Modal';
import Photo from '../../../components/Photo';

const PhotoModal = ({ params: { id: photoId } }: any) => {
    const photos = swagPhoto;
    const photo = photoId && photos.find((x:any)=>x.id == photoId)
  return (
    <Modal>
      <Photo photo={photo}/>
    </Modal>
  );
};

export default PhotoModal;
