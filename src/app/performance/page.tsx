import React from 'react'
import Hero from '@/components/hero'
import performanceImg from 'public/performance.jpg';

export default function PerformancePage() {
  return (
    <div>
      <Hero imgData={performanceImg} imgAlt="welding" title="We Serve High Performace Applications"/>
    </div>
  )
}
