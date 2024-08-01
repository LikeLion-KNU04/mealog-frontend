import ArticleCard from '@/components/ArticleCard'
import Layout from '@/components/Layout'

export default function BoardPage() {
  return (
    <Layout>
      <div className="container mx-auto py-6 h-[60vh]">
        <div className="grid grid-cols-4 gap-4">
          <ArticleCard
            title="게시판"
            description="게시판입니다."
            date="2021-10-10"
          />
          <ArticleCard
            title="게시판"
            description="게시판입니다."
            date="2021-10-10"
          />
          <ArticleCard
            title="게시판"
            description="게시판입니다."
            date="2021-10-10"
          />
          <ArticleCard
            title="게시판"
            description="게시판입니다."
            date="2021-10-10"
          />
        </div>
      </div>
    </Layout>
  )
}
