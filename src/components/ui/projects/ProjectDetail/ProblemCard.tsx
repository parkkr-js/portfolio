import React from 'react';
import { Paragraphs, BulletList } from './TextBlocks';
import { parseContent, formatText } from './utils';
import { Project } from '../../../../types/project';

export const ProblemCard = ({
  problem,
  symptom,
  cause,
  solution,
  result,
  alternatives,
  adoptionReason,
}: {
  problem: string;
    symptom?: string | string[];
  cause?: string | string[];
  solution?: string | string[];
  result?: string | string[];
  alternatives?: NonNullable<Project['problemSolving']>[number]['alternatives'];
  adoptionReason?: string;
}) => {
  const parsedSymptom = parseContent(symptom);
  const parsedCause = parseContent(cause);
  const parsedSolution = parseContent(solution);
  const parsedAdoption = parseContent(adoptionReason);
  const resultArray = Array.isArray(result) ? result : (result ? [result] : []);

  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 space-y-4 text-white">
      <h4 className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: formatText(problem) }} />
      <div className="grid grid-cols-1 gap-4">
        {(Boolean(symptom) || parsedSymptom.bullets.length > 0 || parsedSymptom.paragraphs.length > 0) ? (
          <div className="bg-gray-800/40 rounded-lg p-3">
            <div className="mb-2 text-white font-bold">문제상황</div>
            {parsedSymptom.bullets.length > 0 ? <BulletList items={parsedSymptom.bullets} /> : <Paragraphs items={parsedSymptom.paragraphs} />}
          </div>
        ) : null}
        {(Boolean(cause) || parsedCause.bullets.length > 0 || parsedCause.paragraphs.length > 0) ? (
          <div className="bg-gray-800/40 rounded-lg p-3">
            <div className="mb-2 text-white font-bold">원인</div>
            {parsedCause.bullets.length > 0 ? <BulletList items={parsedCause.bullets} /> : <Paragraphs items={parsedCause.paragraphs} />}
          </div>
        ) : null}
        {(Boolean(solution) || parsedSolution.bullets.length > 0 || parsedSolution.paragraphs.length > 0) ? (
          <div className="bg-gray-800/40 rounded-lg p-3">
            <div className="mb-2 text-white font-bold">해결</div>
            {parsedSolution.bullets.length > 0 ? <BulletList items={parsedSolution.bullets} /> : <Paragraphs items={parsedSolution.paragraphs} />}
          </div>
        ) : null}
      </div>
      {alternatives && alternatives.length > 0 && (
        <div className="bg-gray-800/40 rounded-lg p-3">
          <div className="grid grid-cols-1 gap-3">
            {alternatives.map((alt, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-gray-700 rounded-md p-3 space-y-2">
                <div className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: formatText(alt.summary) }} />
                {alt.description && (
                  Array.isArray(alt.description) ? (
                    <BulletList items={alt.description} />
                  ) : (
                    <Paragraphs items={[alt.description]} />
                  )
                )}
                {alt.pros && alt.pros.length > 0 && (
                  <div>
                    <div className="text-green-400 text-sm mb-1">장점</div>
                    <ul className="list-disc pl-5 text-white space-y-1">
                      {alt.pros.map((p, i) => (<li key={i}>{p}</li>))}
                    </ul>
                  </div>
                )}
                {alt.cons && alt.cons.length > 0 && (
                  <div>
                    <div className="text-red-400 text-sm mb-1">단점</div>
                    <ul className="list-disc pl-5 text-white space-y-1">
                      {alt.cons.map((c, i) => (<li key={i}>{c}</li>))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {adoptionReason && (
        <div className="bg-gray-800/40 rounded-lg p-3">
          <div className="mb-2 text-white font-bold">선택 이유</div>
          {parsedAdoption.bullets.length > 0 && <BulletList items={parsedAdoption.bullets} />}
          {parsedAdoption.paragraphs.length > 0 && <Paragraphs items={parsedAdoption.paragraphs} />}
        </div>
      )}
      {resultArray.length > 0 && (
        <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3">
          <div className="mb-2 text-primary-300 font-bold">결과</div>
          <BulletList items={resultArray} />
        </div>
      )}
    </div>
  );
};


