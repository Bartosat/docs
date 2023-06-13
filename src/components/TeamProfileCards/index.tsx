/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
    return (
        <Link to={to}>
            {children ?? (
                <Translate id="team.profile.websiteLinkLabel">website</Translate>
            )}
        </Link>
    );
}

type ProfileProps = {
    className?: string;
    name: string;
    children: ReactNode;
    githubUrl: string;
    twitterUrl?: string;
};

function TeamProfileCard({
    className,
    name,
    children,
    githubUrl,
    twitterUrl,
}: ProfileProps) {
    return (
        <div className={className}>
            <div className="card card--full-height">
                <div className="card__header">
                    <div className="avatar avatar--vertical">
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src={`${githubUrl}.png`}
                            alt={`${name}'s avatar`}
                        />
                        <div className="avatar__intro">
                            <h3 className="avatar__name">{name}</h3>
                        </div>
                    </div>
                </div>
                <div className="card__body">{children}</div>
                <div className="card__footer">
                    <div className="button-group button-group--block">
                        {githubUrl && (
                            <a className="button button--secondary" href={githubUrl}>
                                GitHub
                            </a>
                        )}
                        {twitterUrl && (
                            <a className="button button--secondary" href={twitterUrl}>
                                Twitter
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamProfileCardCol(props: ProfileProps) {
    return (
        <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
    );
}

export function ActiveTeamRow(): JSX.Element {
    return (
        <div className="row">
            <TeamProfileCardCol
                name="Amalnath R N"
                githubUrl="https://github.com/amalnathh"> 
                Current Project Lead, Obsessed open-source enthusiast 👋 Eternal amateur at everything 🤷‍♂️ 
            </TeamProfileCardCol>
            
            <TeamProfileCardCol
                name="Jijesh J Kumar"
                githubUrl="https://github.com/JJK011">
                Financial Manager 
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Ganesh Menon"
                githubUrl="https://github.com/NEONGASHMEN" >
                Beloved alumni
            </TeamProfileCardCol>
             
            <TeamProfileCardCol
                name="Dr Anish K John"
                githubUrl="https://github.com/yangshun"
                twitterUrl="https://twitter.com/yangshunz">
                <Translate id="team.profile.Yangshun Tay.body">
                    Mentor
                </Translate>
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Prof Anu Muhammad"
                githubUrl="https://github.com/yangshun"
                twitterUrl="https://twitter.com/yangshunz">
                <Translate id="team.profile.Yangshun Tay.body">
                    Mentor
                </Translate>
            </TeamProfileCardCol>
        </div>
    );
}

export function HonoraryAlumniTeamRow(): JSX.Element {
    return (
        <div className="row">
            <TeamProfileCardCol
                name="Aseem"
                githubUrl="https://github.com/endiliey"
                twitterUrl="https://twitter.com/endiliey">
                    Founder
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Aswin"
                githubUrl="https://github.com/wgao19"
                twitterUrl="https://twitter.com/wgao19">
                <Translate id="team.profile.Wei Gao.body">
                 Founder
                </Translate>
            </TeamProfileCardCol>
        </div>
    );
}

export function StudentFellowsTeamRow(): JSX.Element {
    return (
        <div className="row">
            <TeamProfileCardCol
                name="Anshul Goyal"
                githubUrl="https://github.com/anshulrgoyal"
                twitterUrl="https://twitter.com/ar_goyal">
                <Translate
                    id="team.profile.Anshul Goyal.body"
                    values={{
                        websiteLink: (
                            <Link href="https://anshulgoyal.dev/">
                                <Translate id="team.profile.Anshul Goyal.body.websiteLink.label">
                                    website
                                </Translate>
                            </Link>
                        ),
                    }}>
                    {
                        'Fullstack developer who loves to code and try new technologies. In his free time, he contributes to open source, writes blog posts on his {websiteLink} and watches Anime.'
                    }
                </Translate>
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Drew Alexander"
                githubUrl="https://github.com/drewbi">
                <Translate id="team.profile.Drew Alexander.body">
                    Developer and Creative, trying to gain the skills to build whatever he
                    can think of.
                </Translate>
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Fanny Vieira"
                githubUrl="https://github.com/fanny"
                twitterUrl="https://twitter.com/fannyvieiira">
                <Translate
                    id="team.profile.Fanny Vieira.body"
                    values={{
                        blogLink: (
                            <Link href="https://dev.to/fannyvieira">
                                <Translate id="team.profile.Fanny Vieira.body.blogLink.label">
                                    her blog
                                </Translate>
                            </Link>
                        ),
                        spotifyLink: (
                            <Link href="https://open.spotify.com/user/anotherfanny">
                                <Translate id="team.profile.Fanny Vieira.body.spotifyLink.label">
                                    Spotify playlists
                                </Translate>
                            </Link>
                        ),
                    }}>
                    {
                        'Fanny got started with web development in high school, building a project for the school kitchen. In her free time she loves contributing to Open Source, occasionally writing on {blogLink} about her experiences, cooking, and creating {spotifyLink}.'
                    }
                </Translate>
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Sam Zhou"
                githubUrl="https://github.com/SamChou19815"
                twitterUrl="https://twitter.com/SamChou19815">
                <Translate
                    id="team.profile.Sam Zhou.body"
                    values={{
                        websiteLink: (
                            <Link href="https://developersam.com">
                                <Translate id="team.profile.Anshul Goyal.body.websiteLink.label">
                                    website
                                </Translate>
                            </Link>
                        ),
                        samLangLink: (
                            <Link href="https://samlang.developersam.com/">
                                <Translate id="team.profile.Sam Zhou.body.samLangLink.label">
                                    programming language
                                </Translate>
                            </Link>
                        ),
                        miniReactLink: (
                            <Link href="https://github.com/SamChou19815/mini-react">
                                <Translate id="team.profile.Sam Zhou.body.miniReactLink.label">
                                    mini React
                                </Translate>
                            </Link>
                        ),
                    }}>
                    {
                        'Sam started programming in 2011 and built his {websiteLink} in 2015. He is interested in programming languages, dev infra and web development, and has built his own {samLangLink} and {miniReactLink}.'
                    }
                </Translate>
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Tan Teik Jun"
                githubUrl="https://github.com/teikjun"
                twitterUrl="https://twitter.com/teik_jun">
                <Translate id="team.profile.Tan Teik Jun.body">
                    Open-source enthusiast who aims to become as awesome as the other
                    humans on this page. Working on Docusaurus brought him closer to his
                    goal. 🌱
                </Translate>
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Nisarag Bhatt"
                githubUrl="https://github.com/FocalChord"
                twitterUrl="https://twitter.com/focalchord_">
                <Translate id="team.profile.Nisarag Bhatt.body">
                    Fullstack web developer who loves learning new technologies and
                    applying them! Loves contributing to open source as well as writing
                    content articles and tutorials.
                </Translate>
            </TeamProfileCardCol>
        </div>
    );
}