
interface PugoNargoSectionProps {
  onImageClick: (imageSrc: string) => void;
}

export const PugoNargoSection: React.FC<PugoNargoSectionProps> = ({ onImageClick }) => {
  return (
    <div>
      {/* (As-Is) */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          As-Is
        </h4>

        {/* 정산 관리 문제 */}
        <div className="mb-6">
          <h5 className="text-base font-semibold text-red-400 mb-3 text-center">정산 관리 문제</h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-sm font-medium text-gray-200 mb-3">운행일지 (수기 작성)</h6>
              <img
                src="/asset/img/project5_운행일지.png"
                alt="운행일지 수기 작성"
                className="w-full h-48 md:h-64 object-contain rounded filter blur-[0.7px] transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => onImageClick('/asset/img/project5_운행일지.png')}
              />
              <p className="text-xs text-gray-400 mt-2">기사별 운행 내역과 정산금액을 수기로 작성</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-sm font-medium text-gray-200 mb-3">거래내역 엑셀시트 (수기 계산)</h6>
              <img
                src="/asset/img/project5_거래내역엑셀시트.png"
                alt="거래내역 엑셀시트"
                className="w-full h-48 md:h-64 object-contain rounded filter blur-[0.7px] transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => onImageClick('/asset/img/project5_거래내역엑셀시트.png')}
              />
              <p className="text-xs text-gray-400 mt-2">기사별 정산금액을 수기로 계산</p>
            </div>
          </div>
        </div>

        {/* 배차 관리 문제 */}
        <div>
          <h5 className="text-base font-semibold text-red-400 mb-3 text-center">배차 관리 문제</h5>
          <div className="grid grid-cols-1 gap-6 place-items-center">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-sm font-medium text-gray-200 mb-3">배차관리 엑셀시트 (수동 입력)</h6>
              <img
                src="/asset/img/project5_배차관리엑셀시트.png"
                alt="배차관리 엑셀시트"
                className="w-full h-48 md:h-64 object-contain rounded filter blur-[0.7px] transition-transform duration-300 cursor-pointer hover:scale-105"
                onClick={() => onImageClick('/asset/img/project5_배차관리엑셀시트.png')}
              />
              <p className="text-xs text-gray-400 mt-2">기사별 배차 정보 및 주의사항을 스프레드시트에 수동 입력</p>
            </div>
          </div>
        </div>
      </div>

      {/* To-Be */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          To-Be
        </h4>
        <div className="mb-8">
        {/* 정산 관리 자동화 */}
        <div className="mb-6">
          <h5 className="text-base font-semibold text-green-400 mb-3 text-center">정산 관리 자동화</h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-sm font-medium text-gray-200 mb-3">거래내역 관리 (어드민 페이지)</h6>
              <img
                src="/asset/img/project5_거래내역화면.png"
                alt="거래내역 관리"
                className="w-full h-48 md:h-64 object-contain rounded transition-transform duration-300 cursor-pointer hover:scale-105"
                onClick={() => onImageClick('/asset/img/project5_거래내역화면.png')}
              />
              <p className="text-xs text-gray-400 mt-2">스프레드시트에 입력된 내용을 자동으로 불러와 웹페이지에서 기사별/일별/그룹별 정산 금액을 확인 가능</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-sm font-medium text-gray-200 mb-3">관리자 대시보드 (어드민 페이지)</h6>
              <img
                src="/asset/img/project5_대시보드화면.png"
                alt="관리자 대시보드"
                className="w-full h-48 md:h-64 object-contain rounded transition-transform duration-300 cursor-pointer hover:scale-105"
                onClick={() => onImageClick('/asset/img/project5_대시보드화면.png')}
              />
              <p className="text-xs text-gray-400 mt-2">관리자는 연동된 어드민 페이지에서 정산 현황을 한눈에 파악 </p>
            </div>
          </div>
        </div>

        {/* 배차 관리 자동화 */}
        <div className="mb-6">
          <h5 className="text-base font-semibold text-green-400 mb-3 text-center">배차 관리 자동화</h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-sm font-medium text-gray-200 mb-3">배차 관리 (어드민 페이지)</h6>
              <img
                src="/asset/img/project5_배차관리화면1.png"
                alt="배차 관리 1"
                className="w-full h-48 md:h-64 object-contain rounded transition-transform duration-300 cursor-pointer hover:scale-105"
                onClick={() => onImageClick('/asset/img/project5_배차관리화면1.png')}
              />
              <p className="text-xs text-gray-400 mt-2">시트 연동: 관리자가 스프레드시트를 선택하면, 시스템이 배차 정보를 자동으로 가져와 날짜별로 정리해 저장</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h6 className="text-sm font-medium text-gray-200 mb-3">배차 관리 (어드민 페이지)</h6>
              <img
                src="/asset/img/project5_배차관리화면2.png"
                alt="배차 관리 2"
                className="w-full h-48 md:h-64 object-contain rounded transition-transform duration-300 cursor-pointer hover:scale-105"
                onClick={() => onImageClick('/asset/img/project5_배차관리화면2.png')}
              />
              <p className="text-xs text-gray-400 mt-2">테이블 확인: 날짜를 선택하면 매입처·차량·상/하차지·회전수를 한 화면에서 필터·정렬하며 실시간으로 확인</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* 기사 전용 페이지 */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-200 mb-3">기간별 통계 (기사 페이지)</h5>
            <img
              src="/asset/img/project5_기사님페이지기간별통계화면.png"
              alt="기간별 통계"
              className="w-full h-48 md:h-64 object-contain rounded transition-transform duration-300 cursor-pointer hover:scale-105"
              onClick={() => onImageClick('/asset/img/project5_기사님페이지기간별통계화면.png')}
            />
            <p className="text-xs text-gray-400 mt-2">본인 계정으로 로그인 후 기간을 선택하면 운행·연료·수리 등 지표가 자동 합산되어 카드/차트로 한눈에 확인되고, 변경 사항이 즉시 반영</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-200 mb-3">일별 기록 (기사 페이지)</h5>
            <img
              src="/asset/img/project5_기사님페이지일별기록화면.png"
              alt="일별 기록"
              className="w-full h-48 md:h-64 object-contain rounded transition-transform duration-300 cursor-pointer hover:scale-105"
              onClick={() => onImageClick('/asset/img/project5_기사님페이지일별기록화면.png')}
            />
            <p className="text-xs text-gray-400 mt-2">날짜 선택 후 그날의 운행·연료·수리 기록과 메모를 한 화면에서 확인하고 바로 추가·수정·삭제 가능</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-200 mb-3">기사님 배차 (기사 페이지)</h5>
            <img
              src="/asset/img/project5_기사님배차화면.png"
              alt="기사님 배차"
              className="w-full h-48 md:h-64 object-contain rounded transition-transform duration-300 cursor-pointer hover:scale-105"
              onClick={() => onImageClick('/asset/img/project5_기사님배차화면.png')}
            />
            <p className="text-xs text-gray-400 mt-2">날짜별 본인 배차 내역(상·하차지, 회전수, 주의사항)을 실시간으로 확인하고 시트의 주석까지 확인 가능</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};


