import MainLayout from '@/components/MainLayout'

export default function AnalyzePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-36 py-16">
        <div className="text-primary-800 text-3xl font-semibold pb-6">
          분석하기
        </div>

        <div className="w-full bg-gray-200">
          <div className="w-1/3 h-1 bg-primary-600" />
        </div>

        <div className="flex items-center py-12 gap-12">
          <div className="w-1/3 h-full p-6 rounded-xl flex justify-center items-center bg-gray-100 text-gray-500">
            <div className="text-2xl font-semibold">사진 업로드</div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
