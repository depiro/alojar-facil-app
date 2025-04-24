
import React from 'react';
import { useFormContext } from "react-hook-form";
import LegalDataSection from './sections/LegalDataSection';
import ClassificationSection from './sections/ClassificationSection';
import AddressSection from './sections/AddressSection';
import GeolocationSection from './sections/GeolocationSection';
import ContactSection from './sections/ContactSection';
import OwnerSection from './sections/OwnerSection';
import StatusSection from './sections/StatusSection';
import InfractionsSection from './sections/InfractionsSection';

const GeneralDataForm = () => {
  return (
    <div className="space-y-6">
      <LegalDataSection />
      <ClassificationSection />
      <AddressSection />
      <GeolocationSection />
      <ContactSection />
      <OwnerSection />
    </div>
  );
};

export default GeneralDataForm;
