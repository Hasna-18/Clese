import React from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function ProgramsLoading() {
  return <LoadingSpinner fullScreen={true} message="Loading Programs" />;
}
