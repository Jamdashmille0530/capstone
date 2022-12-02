import React from 'react'
import laovid from 'assets/loavid.gif'
import { useCallback } from 'react'
import { addFile } from 'utils/user.route'
import { useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { storage } from 'pages/firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const requirements = [
  {
    name: 'ID Picture',
    required: 'idPicture',
  },
  {
    name: 'Grade Slip',
    required: 'gradeSlip',
  },
  {
    name: 'Photocopy of Enrollment Slip',
    required: 'eslip',
  },
  {
    name: 'Electric Bill',
    required: 'ebill',
  },
  {
    name: 'Water Bill',
    required: 'wbill',
  },
  {
    name: 'Telephone Bill',
    required: 'tbill',
  },
  {
    name: 'Photocopy of your National Career Assessment Examination (NCAE)',
    required: 'ncae',
  },
  {
    name: 'Photocopy and Original Copy of PSA Birth Certificate',
    required: 'bcert',
  },
  {
    name: 'Certificate of Ingdigency',
    required: 'indigency',
  },
  {
    name: 'Autobiography',
    required: 'autobiography',
  },
  {
    name: 'Photocopy and Original Copy of Pantawid ID',
    required: 'pantawidId',
  },
  {
    name: 'Sketch of Home Address',
    required: 'sketchAdress',
  },
]

const Upload = ({ name, required }) => {
  const [loading, setLoading] = useState(null)

  const upload = useCallback((e) => {
    // const fileUpload = async () => {
    //   await addFile(formData, required)
    //   setLoading(false)
    // }
    setLoading(true)
    if (e.target.files) {
      // const formData = new FormData()
      // formData.append('image', e.target.files[0])
      const file = e.target.files[0]
      const metadata = {
        contentType: file.type,
      }

      const attachment = ref(storage, `attachments/${file.name + v4()}`)
      uploadBytes(attachment, file, metadata).then(() => {
        alert('File uploaded')
        setLoading(false)
      })
    }
    // fileUpload()

    // const metadata = {
    //   contentType: 'image/jpeg',
    // }

    // const attachment = ref(storage, `attachments/${fileUpload.name + v4()}`)
    // uploadBytes(attachment, fileUpload, metadata).then(() => {
    //   alert('File uploaded')
    // })
  }, [])

  return (
    <div className="mb-1">
      <span>{name}</span>
      {/* <div className="-mb-5 mt-2">
        <AiOutlineDownload />
      </div> */}
      <div className="relative border-solid h-25 w-40 ml-6 rounded-lg border-2 border-green-600 bg-gray-100 flex justify-center items-center">
        <div className="absolute">
          <div className="flex flex-col items-center">
            {' '}
            <span className="text-sm block text-gray-400 font-normal">
              {loading
                ? 'Loading...'
                : loading === null
                ? 'Attach your files here'
                : 'Attached!'}
            </span>{' '}
          </div>
        </div>{' '}
        <input
          type="file"
          class="h-full w-full opacity-0"
          name=""
          onChange={upload}
        />
      </div>
    </div>
  )
}

const Signup = () => {
  return (
    <>
      <div className="flex justify-start w-auto pl-2">
        <div className=" px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <div className="md:flex">
            <div className="w-full px-4 py-6 ">
              <div className="mb-1">
                {' '}
                <span className="text-2xl text-gray-700 ">
                  Attach All The Needed Files For Your Application
                </span>{' '}
                <span className="text-s text-red-900 text-bo">
                  Make sure to attach png, jpeg, jpg (ex. FILE_SURNAME_FIRSTNAME)
                </span>{' '}
              </div>
              <div className="grid md:grid-cols-2">
                {requirements.map((data, i) => (
                  <Upload key={i} name={data.name} required={data.required} />
                ))}
              </div>
              <div className="mb-1"></div>
              <div className="mt-3 text-right">
                {' '}
                <a href="/signuptwo">Back</a>{' '}
                <button
                  className="ml-2 h-10 w-32 bg-green-700 rounded text-white hover:bg-green-900"
                  onClick={alert('You have submitted your application')}
                  type="submit"
                >
                  Submit
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex max-h-full pt-5 pl-2 ">
          <img src={laovid} />
        </div>
      </div>
    </>
  )
}

export default Signup
