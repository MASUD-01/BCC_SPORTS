'use client';

import { FormInput, FormSelectInput } from '@/components/form-items';
import BCCHeader from '@/app/(public)/(home)/_component/BCCHeader';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import { TbCloudUpload } from 'react-icons/tb';
import CongratulationRegistration from '../../(home)/_component/CongratulationRegistration';
import {
  useCreateRegistrationMutation,
  useGetRolesQuery,
  useGetTeamsQuery,
  useGetTournamentQuery,
} from '@/lib/APIs/common-api';
const registerSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  role: z.string().nonempty({ message: 'Role is required' }),
  phone_number: z.string().nonempty({ message: 'Phone number is required' }),
  location: z.string().nonempty({ message: 'Location is required' }),
  team: z.string().nonempty({ message: 'Team is required' }),
  transaction_id: z.string().nonempty({ message: 'Transaction ID is required' }),
  image: z.instanceof(File, { message: 'image is required' }),
});

export type IRegisterSchema = z.infer<typeof registerSchema>;

// Inside your Register component

const Register = () => {
  const { data } = useGetRolesQuery();
  const { data: touranment } = useGetTournamentQuery();
  const { data: teams } = useGetTeamsQuery();
  console.log(data, '--------------');
  const [createRegistration] = useCreateRegistrationMutation();
  const methods = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      role: 'All rounder',
      phone_number: '',
      location: '',
      team: 'Bangladesh',
      transaction_id: '',
      image: undefined,
    },
  });
  const onSubmit = (data: IRegisterSchema) => {
    console.log('Form Data:', data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('role', data.role);
    formData.append('phone_number', data.phone_number);
    formData.append('location', data.location);
    formData.append('team', data.team);
    formData.append('transaction_id', data.transaction_id);

    if (data.image) {
      formData.append('image', data.image); // file input
    }

    createRegistration(formData);
  };

  return (
    <div className=''>
      <BCCHeader />
      <div className='w-full container mx-auto flex flex-col justify-center my-20'>
        {/* HEADER */}
        <div className='py-5 bg-green-600 rounded-2xl text-center text-white relative'>
          <h1 className='text-3xl md:text-6xl font-bebas font-bold'>BCC Fan’s Tournament - 2025</h1>
          <p className='text-2xl mt-1 font-medium'>Registration now</p>

          <img
            src='/bccImages/single_cup.png'
            className='absolute right-[-21px] -top-10 w-36 h-36 z-20 hidden md:block'
            alt='badge'
          />
        </div>

        {/* BODY */}
        <div className='flex flex-col lg:flex-row gap-4 mt-6'>
          {/* LEFT FORM */}
          <div className='relative w-full max-w-[750px] p-6 bg-white rounded-2xl outline outline-[0.5px] outline-black overflow-hidden order-2 lg:order-1'>
            {/* Green blur background */}
            <div className='absolute -top-10 -left-10 w-[450px] h-[450px] bg-green-600/40 rounded-full blur-[200px] pointer-events-none' />

            {/* FORM BODY */}
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className='mt-6 space-y-6'>
                {/* Grid Container */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {/* Name */}
                  <FormInput<IRegisterSchema>
                    name='name'
                    label='Type your name*'
                    placeholder='Type your name'
                  />

                  {/* Role */}
                  <FormSelectInput<IRegisterSchema>
                    name='role'
                    label='Select your role*'
                    placeholder='Select role'
                    options={data?.map((item) => ({ label: item.name, value: item.name })) || []}
                  />

                  {/* Phone */}
                  <FormInput<IRegisterSchema>
                    name='phone_number'
                    label='Add your mobile number*'
                    placeholder='01XXXXXXXXX'
                  />

                  <FormSelectInput<IRegisterSchema>
                    name='role'
                    label='Select your Tournament*'
                    placeholder='Select Tournament'
                    options={
                      touranment?.map((item) => ({ label: item.name, value: item.name })) || []
                    }
                  />

                  {/* Team */}
                  <FormSelectInput<IRegisterSchema>
                    name='team'
                    label='Select your team*'
                    placeholder='Select team'
                    options={teams?.map((item) => ({ label: item.name, value: item.name })) || []}
                  />

                  {/* Transaction ID */}
                  <FormInput<IRegisterSchema>
                    name='transaction_id'
                    label='bKash transaction ID*'
                    placeholder='Transaction ID'
                  />
                </div>

                {/* File upload full width */}
                <div className='flex flex-col gap-2'>
                  <label className='text-base font-medium'>Upload your image*</label>

                  {/* Upload Box */}
                  <label
                    className='w-full border border-gray-300 rounded-md py-10
      flex flex-col items-center justify-center cursor-pointer
      hover:bg-gray-100 transition text-center'
                  >
                    <TbCloudUpload className='text-5xl text-gray-500 mb-3' />

                    <span className='text-sm text-gray-600 font-medium'>Click to upload</span>

                    <p className='text-xs text-gray-500'>
                      (You must submit a image wearing the team jersey.)
                    </p>
                    {methods.watch('image')?.name && (
                      <p className='text-sm text-green-600 font-medium mt-1'>
                        Selected: {methods.watch('image')?.name}
                      </p>
                    )}
                    <input
                      type='file'
                      accept='image/*'
                      {...methods.register('image', { required: 'image is required' })}
                      className='hidden'
                      onChange={(e: any) => {
                        methods.setValue('image', e.target.files?.[0]);
                        methods.trigger('image'); // validate immediately
                      }}
                    />
                  </label>

                  {/* Show selected file name */}

                  {/* Error message */}
                  {methods.formState.errors.image && (
                    <p className='text-sm text-red-600'>
                      {methods.formState.errors.image.message as string}
                    </p>
                  )}
                </div>

                {/* Submit Button - full width */}
                <Button
                  type='submit'
                  className='mt-6 w-full py-3 bg-blue-950 text-white rounded-lg font-medium'
                >
                  Submit
                </Button>
              </form>
            </FormProvider>
          </div>

          {/* RIGHT RULES BOX */}
          <div className='w-full lg:w-[460px] bg-neutral-50/95 rounded-2xl border border-green-600 p-5 overflow-y-auto order-1 lg:order-2'>
            <div className='px-1 py-2 bg-orange-500 rounded-lg text-center text-white text-xs font-medium'>
              Fans Tournament 2025 – রেজিস্ট্রেশন নিয়মাবলি
            </div>

            <div className='text-sm mt-1 text-black leading-6 space-y-2'>
              <p>
                1. আপনার নাম এবং আপনার রোল নির্বাচন করুন — (ব্যাটার / বোলার / ফিল্ডার / উইকেট কিপার
                / অলরাউন্ডার)
              </p>
              <p>2. আপনার ফোন নাম্বার এবং লোকেশন (গ্রামের নাম) লিখুন।</p>
              <p>3. আপনার টিম সিলেক্ট করুন।</p>

              <p className=''>4. পেমেন্ট সিস্টেম:</p>

              <ul className='list-disc m-0 space-y-0 pl-10'>
                <li className='pl-0'>
                  রেজিস্ট্রেশন ফি Send Money করুন 👉 <b>01777-327280</b> নম্বরে।
                </li>
                <li className='pl-0'>পেমেন্ট সম্পন্ন হলে আপনার Transaction ID কপি করুন।</li>
                <li className='pl-0'>
                  এরপর ফর্মের “bKash Transaction ID” ইনপুট ফিল্ডে সেই নম্বরটি পেস্ট করুন।
                </li>
              </ul>

              <p>5. আপনার প্রিয় টিমের জার্সি পরে একটি স্পষ্ট ছবি দিন।</p>
              <p>6. সবশেষে ফর্ম সাবমিট করুন এবং ভেরিফিকেশনের জন্য অপেক্ষা করুন।</p>
              <p className='text-red-600 font-semibold mt-2'>
                📢 বিঃদ্রঃ উপরের যেকোনো ধাপ ভুল হলে রেজিস্ট্রেশন বাতিল হবে।
              </p>

              <p className='mt-2'>
                প্রয়োজনেঃ <br />
                (তুর্য্য) ০১৭৭৭-৩২৭২৮০ <br />
                (ছোটন) ০১৫১৮-৬০৬৩৯৯
              </p>
            </div>
          </div>
        </div>
      </div>

      <CongratulationRegistration />
    </div>
  );
};

export default Register;
