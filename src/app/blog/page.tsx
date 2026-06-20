import type { Metadata } from 'next';
import ElementorStyles from '@/components/layout/ElementorStyles';

export const metadata: Metadata = {
  title: 'Blog | Dev Community Nepal',
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main">
	<div class="page-header" style="background-image: url('/wp-content/uploads/2025/09/page-header-bg-2.png')">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-12">
					<div class="page-header-box">
						<h1 class="entry-title">Ad minim veniam quis</h1>
												<div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs"><ol class="trail-items"><li class="trail-item trail-begin"><a href="/" rel="home"><span>Home</span></a></li><li class="trail-item trail-end"><span><span>Blog</span></span></li></ol></div>					</div>
				</div>
			</div>
		</div>
	</div>

<div class="page-content">
		<div class="page-blog-archive">
			<div class="container">
				<div class="row">
					<div class="col-md-12 blog-style-3">
						<div class="row">
														<div class="col-md-12">
															</div>
						</div>
					</div>
									</div>
			</div>
		</div>
	</div>
</main>` }} />
    </>
  );
}
