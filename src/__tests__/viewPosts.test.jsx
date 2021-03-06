import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitForElement, mockFn } from '@testing-library/react';

import { store } from '../app/store';
import PostList from '../routes/PostList';

const getPosts = require('../api/posts').getPosts;
jest.mock('../api/posts', () => ({
  getPosts: jest.fn(),
}));

const res = {
  kind: 'Listing',
  data: {
    modhash: '',
    dist: 25,
    children: [
      {
        kind: 't3',
        data: {
          approved_at_utc: null,
          subreddit: 'wallpapers',
          selftext: '',
          author_fullname: 't2_kig73',
          saved: false,
          mod_reason_title: null,
          gilded: 0,
          clicked: false,
          title: 'Softened a photo I took of Hollywood blvd',
          link_flair_richtext: [],
          subreddit_name_prefixed: 'r/wallpapers',
          hidden: false,
          pwls: 6,
          link_flair_css_class: null,
          downs: 0,
          thumbnail_height: 93,
          top_awarded_type: null,
          hide_score: false,
          name: 't3_2rr9ec',
          quarantine: false,
          link_flair_text_color: 'dark',
          upvote_ratio: 0.97,
          author_flair_background_color: null,
          subreddit_type: 'public',
          ups: 7552,
          total_awards_received: 0,
          media_embed: {},
          thumbnail_width: 140,
          author_flair_template_id: null,
          is_original_content: false,
          user_reports: [],
          secure_media: null,
          is_reddit_media_domain: false,
          is_meta: false,
          category: null,
          secure_media_embed: {},
          link_flair_text: null,
          can_mod_post: false,
          score: 7552,
          approved_by: null,
          author_premium: false,
          thumbnail: 'https://b.thumbs.redditmedia.com/_UopvXCtggQFfjiGnJHUeCaK0qqWPBXH5RdNuguQCNw.jpg',
          edited: false,
          author_flair_css_class: null,
          author_flair_richtext: [],
          gildings: {},
          post_hint: 'image',
          content_categories: null,
          is_self: false,
          mod_note: null,
          created: 1420764528.0,
          link_flair_type: 'text',
          wls: 6,
          removed_by_category: null,
          banned_by: null,
          author_flair_type: 'text',
          domain: 'i.imgur.com',
          allow_live_comments: true,
          selftext_html: null,
          likes: null,
          suggested_sort: null,
          banned_at_utc: null,
          url_overridden_by_dest: 'http://i.imgur.com/5yeBVeM.jpg',
          view_count: null,
          archived: true,
          no_follow: false,
          is_crosspostable: false,
          pinned: false,
          over_18: false,
          preview: {
            images: [
              {
                source: {
                  url:
                    'https://external-preview.redd.it/JkuVMLegfG0wyMKJMeZMffR6NAIN2f3qWiof0GGasAY.jpg?auto=webp&amp;s=670cee91eca844ed1d45ce5246be2b182889ae0a',
                  width: 3867,
                  height: 2572,
                },
                resolutions: [
                  {
                    url:
                      'https://external-preview.redd.it/JkuVMLegfG0wyMKJMeZMffR6NAIN2f3qWiof0GGasAY.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=64f9b881bb39862fcf261b4ae9f9f27dbcd65121',
                    width: 108,
                    height: 71,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/JkuVMLegfG0wyMKJMeZMffR6NAIN2f3qWiof0GGasAY.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=7ad88d86aa206b3b33b41433592c855199675e5c',
                    width: 216,
                    height: 143,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/JkuVMLegfG0wyMKJMeZMffR6NAIN2f3qWiof0GGasAY.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=118942538b84f4fd8dcbb81be3c0581973303482',
                    width: 320,
                    height: 212,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/JkuVMLegfG0wyMKJMeZMffR6NAIN2f3qWiof0GGasAY.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=f9ea71f54225ccdb33b5a28b9708919610eb3d90',
                    width: 640,
                    height: 425,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/JkuVMLegfG0wyMKJMeZMffR6NAIN2f3qWiof0GGasAY.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=29d89e2421ea9de261c0573287645ad0871ae292',
                    width: 960,
                    height: 638,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/JkuVMLegfG0wyMKJMeZMffR6NAIN2f3qWiof0GGasAY.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=07b2de1ff2a7bf59fd44a3c191e8f8500db93f2e',
                    width: 1080,
                    height: 718,
                  },
                ],
                variants: {},
                id: 'Jfxzqio-NrYQErvvgeL1HXm7HZLlbIBFDN4Deqx7I6A',
              },
            ],
            enabled: true,
          },
          all_awardings: [],
          awarders: [],
          media_only: false,
          can_gild: false,
          spoiler: false,
          locked: false,
          author_flair_text: null,
          treatment_tags: [],
          visited: false,
          removed_by: null,
          num_reports: null,
          distinguished: null,
          subreddit_id: 't5_2qhw4',
          mod_reason_by: null,
          removal_reason: null,
          link_flair_background_color: '',
          id: '2rr9ec',
          is_robot_indexable: true,
          report_reasons: null,
          author: 'zlakphoto',
          discussion_type: null,
          num_comments: 193,
          send_replies: true,
          whitelist_status: 'all_ads',
          contest_mode: false,
          mod_reports: [],
          author_patreon_flair: false,
          author_flair_text_color: null,
          permalink: '/r/wallpapers/comments/2rr9ec/softened_a_photo_i_took_of_hollywood_blvd/',
          parent_whitelist_status: 'all_ads',
          stickied: false,
          url: 'http://i.imgur.com/5yeBVeM.jpg',
          subreddit_subscribers: 580410,
          created_utc: 1420735728.0,
          num_crossposts: 1,
          media: null,
          is_video: false,
        },
      },
      {
        kind: 't3',
        data: {
          approved_at_utc: null,
          subreddit: 'wallpapers',
          selftext: '',
          user_reports: [],
          saved: false,
          mod_reason_title: null,
          gilded: 0,
          clicked: false,
          title: 'Test post 2',
          link_flair_richtext: [],
          subreddit_name_prefixed: 'r/wallpapers',
          hidden: false,
          pwls: 6,
          link_flair_css_class: 'nothumb',
          downs: 0,
          thumbnail_height: 78,
          top_awarded_type: null,
          hide_score: false,
          name: 't3_6sbqwi',
          quarantine: false,
          link_flair_text_color: 'dark',
          upvote_ratio: 0.98,
          author_flair_background_color: '',
          subreddit_type: 'public',
          ups: 6516,
          total_awards_received: 0,
          media_embed: {},
          thumbnail_width: 140,
          author_flair_template_id: null,
          is_original_content: false,
          secure_media: null,
          is_reddit_media_domain: false,
          is_meta: false,
          category: null,
          secure_media_embed: {},
          link_flair_text: '',
          can_mod_post: false,
          score: 6516,
          approved_by: null,
          thumbnail: 'https://b.thumbs.redditmedia.com/yuNAitd2vU4Hv3YLbWeSbec663RW6IowhvoUYKrO7CU.jpg',
          edited: false,
          author_flair_css_class: null,
          gildings: {},
          post_hint: 'image',
          content_categories: null,
          is_self: false,
          mod_note: null,
          created: 1502203071.0,
          link_flair_type: 'text',
          wls: 6,
          removed_by_category: null,
          banned_by: null,
          domain: 'i.imgur.com',
          allow_live_comments: true,
          selftext_html: null,
          likes: null,
          suggested_sort: null,
          banned_at_utc: null,
          url_overridden_by_dest: 'http://i.imgur.com/Z6kdWmA.jpg',
          view_count: null,
          archived: true,
          no_follow: false,
          is_crosspostable: false,
          pinned: false,
          over_18: false,
          preview: {
            images: [
              {
                source: {
                  url:
                    'https://external-preview.redd.it/C-QuXdQMBpp-nBHnh-5liLgNBrlH2hHqQqO6gtZcm-I.jpg?auto=webp&amp;s=c1da15979e0a23426d24e86e06cabaa0d2becc4b',
                  width: 2048,
                  height: 1152,
                },
                resolutions: [
                  {
                    url:
                      'https://external-preview.redd.it/C-QuXdQMBpp-nBHnh-5liLgNBrlH2hHqQqO6gtZcm-I.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=e767880e93e6eb30319205ed4fa173fe6600a706',
                    width: 108,
                    height: 60,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/C-QuXdQMBpp-nBHnh-5liLgNBrlH2hHqQqO6gtZcm-I.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=06d869633cda9c89072c7d9bb9c93a09bc50ce58',
                    width: 216,
                    height: 121,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/C-QuXdQMBpp-nBHnh-5liLgNBrlH2hHqQqO6gtZcm-I.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=481c90cec5bb91511da0cf3d7ee22b0e812e9b83',
                    width: 320,
                    height: 180,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/C-QuXdQMBpp-nBHnh-5liLgNBrlH2hHqQqO6gtZcm-I.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=16d0ae71aa35270c075ad476df0f2b77719dc15d',
                    width: 640,
                    height: 360,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/C-QuXdQMBpp-nBHnh-5liLgNBrlH2hHqQqO6gtZcm-I.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=df6aa09f47fc3fa1fdccf0f1a70faac257602dd4',
                    width: 960,
                    height: 540,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/C-QuXdQMBpp-nBHnh-5liLgNBrlH2hHqQqO6gtZcm-I.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=7ac1e6578992fdfae99c2b549a9212038e46fe03',
                    width: 1080,
                    height: 607,
                  },
                ],
                variants: {},
                id: 'a5Ggd7AgyuI3OZnvgmBD2Rk7pl1ciwihaSZyvdxTcbI',
              },
            ],
            enabled: true,
          },
          all_awardings: [],
          awarders: [],
          media_only: false,
          can_gild: false,
          spoiler: false,
          locked: false,
          author_flair_text: null,
          treatment_tags: [],
          visited: false,
          removed_by: null,
          num_reports: null,
          distinguished: null,
          subreddit_id: 't5_2qhw4',
          mod_reason_by: null,
          removal_reason: null,
          link_flair_background_color: '',
          id: '6sbqwi',
          is_robot_indexable: true,
          report_reasons: null,
          author: '[deleted]',
          discussion_type: null,
          num_comments: 248,
          send_replies: true,
          whitelist_status: 'all_ads',
          contest_mode: false,
          mod_reports: [],
          author_flair_text_color: 'dark',
          permalink: '/r/wallpapers/comments/6sbqwi/jaime_lannister/',
          parent_whitelist_status: 'all_ads',
          stickied: false,
          url: 'http://i.imgur.com/Z6kdWmA.jpg',
          subreddit_subscribers: 580410,
          created_utc: 1502174271.0,
          num_crossposts: 1,
          media: null,
          is_video: false,
        },
      },
      {
        kind: 't3',
        data: {
          approved_at_utc: null,
          subreddit: 'wallpapers',
          selftext: '',
          user_reports: [],
          saved: false,
          mod_reason_title: null,
          gilded: 0,
          clicked: false,
          title: 'Eclipse',
          link_flair_richtext: [],
          subreddit_name_prefixed: 'r/wallpapers',
          hidden: false,
          pwls: 6,
          link_flair_css_class: null,
          downs: 0,
          thumbnail_height: 78,
          top_awarded_type: null,
          hide_score: false,
          name: 't3_6xrip7',
          quarantine: false,
          link_flair_text_color: 'dark',
          upvote_ratio: 0.99,
          author_flair_background_color: '',
          subreddit_type: 'public',
          ups: 6415,
          total_awards_received: 0,
          media_embed: {},
          thumbnail_width: 140,
          author_flair_template_id: null,
          is_original_content: false,
          secure_media: null,
          is_reddit_media_domain: false,
          is_meta: false,
          category: null,
          secure_media_embed: {},
          link_flair_text: null,
          can_mod_post: false,
          score: 6415,
          approved_by: null,
          thumbnail: 'https://b.thumbs.redditmedia.com/tXYU39sw5Fh34EZuaJrL6w24RFHs94xcohm1Mdx5QBc.jpg',
          edited: false,
          author_flair_css_class: null,
          gildings: {},
          post_hint: 'image',
          content_categories: null,
          is_self: false,
          mod_note: null,
          created: 1504446013.0,
          link_flair_type: 'text',
          wls: 6,
          removed_by_category: null,
          banned_by: null,
          domain: 'i.imgur.com',
          allow_live_comments: true,
          selftext_html: null,
          likes: null,
          suggested_sort: null,
          banned_at_utc: null,
          url_overridden_by_dest: 'http://i.imgur.com/ezOgN0q.jpg',
          view_count: null,
          archived: true,
          no_follow: false,
          is_crosspostable: false,
          pinned: false,
          over_18: false,
          preview: {
            images: [
              {
                source: {
                  url:
                    'https://external-preview.redd.it/9v61cIAUyx2keP4vORYNVg6VF42sjI9I_3hKglAju6k.jpg?auto=webp&amp;s=6ca17e17d94a70768b3c9ce166d688f1440d8f60',
                  width: 1920,
                  height: 1080,
                },
                resolutions: [
                  {
                    url:
                      'https://external-preview.redd.it/9v61cIAUyx2keP4vORYNVg6VF42sjI9I_3hKglAju6k.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=e7a67bc544059403dae085f12de4fa39aa93e9d2',
                    width: 108,
                    height: 60,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/9v61cIAUyx2keP4vORYNVg6VF42sjI9I_3hKglAju6k.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=1c9bb3013a8d23e9c39d878f46305e3ad4df1fa9',
                    width: 216,
                    height: 121,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/9v61cIAUyx2keP4vORYNVg6VF42sjI9I_3hKglAju6k.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=bf5a37556a724a76189a4e0b8ae9ee68c76804d3',
                    width: 320,
                    height: 180,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/9v61cIAUyx2keP4vORYNVg6VF42sjI9I_3hKglAju6k.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=4c6a47cb118b327dd01000e9b1b5c452af59001b',
                    width: 640,
                    height: 360,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/9v61cIAUyx2keP4vORYNVg6VF42sjI9I_3hKglAju6k.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=67acb0be23e14b9942a18fdc42ca997c8fc71fb2',
                    width: 960,
                    height: 540,
                  },
                  {
                    url:
                      'https://external-preview.redd.it/9v61cIAUyx2keP4vORYNVg6VF42sjI9I_3hKglAju6k.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=1813ab1b086b978660425e236d926ff72339a6eb',
                    width: 1080,
                    height: 607,
                  },
                ],
                variants: {},
                id: 's4wfn0RL3XJAy_FBICwFqq0s08rFZRJEakCuGE2T62Y',
              },
            ],
            enabled: true,
          },
          all_awardings: [],
          awarders: [],
          media_only: false,
          can_gild: false,
          spoiler: false,
          locked: false,
          author_flair_text: null,
          treatment_tags: [],
          visited: false,
          removed_by: null,
          num_reports: null,
          distinguished: null,
          subreddit_id: 't5_2qhw4',
          mod_reason_by: null,
          removal_reason: null,
          link_flair_background_color: '',
          id: '6xrip7',
          is_robot_indexable: true,
          report_reasons: null,
          author: '[deleted]',
          discussion_type: null,
          num_comments: 44,
          send_replies: true,
          whitelist_status: 'all_ads',
          contest_mode: false,
          mod_reports: [],
          author_flair_text_color: 'dark',
          permalink: '/r/wallpapers/comments/6xrip7/eclipse/',
          parent_whitelist_status: 'all_ads',
          stickied: false,
          url: 'http://i.imgur.com/ezOgN0q.jpg',
          subreddit_subscribers: 580410,
          created_utc: 1504417213.0,
          num_crossposts: 2,
          media: null,
          is_video: false,
        },
      },
    ],
  },
};

describe('view a list of reddit post', () => {
  beforeEach(() => {
    getPosts.mockResolvedValue(res);
  });
  afterEach(() => {
    getPosts.mockReset();
  });
  it('shows a list of reddit posts', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PostList />
        </Router>
      </Provider>,
    );
    await waitForElement(() => getByText('Softened a photo I took of Hollywood blvd'));
    await waitForElement(() => getByText('Test post 2'));
  });
});
